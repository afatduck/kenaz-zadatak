<template>
  <div class="comments" v-if="comments">
    <h2>Comments</h2>
    <div class="comment" v-for="(comment, index) in comments" :key="index">
      <img src="@/assets/user.png" :alt="comment.user" />
      <div>
        <div class="top">
          <h4>{{ comment.user }}</h4>
          <p>{{ comment.time }}</p>
          <button @click="replyClick(comment.user, comment.id)">Reply</button>
        </div>
        <p>{{ comment.text }}</p>
        <section
          class="reply"
          v-for="(reply, index) in comment.replies"
          :key="index"
        >
          <img src="@/assets/user.png" :alt="reply.user" />
          <div>
            <div class="top">
              <h5>
                {{ reply.user }} <span>@{{ reply.to }}</span>
              </h5>
              <p>{{ reply.time }}</p>
              <button @click="replyClick(reply.user, comment.id)">Reply</button>
            </div>
            <p>{{ reply.text }}</p>
          </div>
        </section>
      </div>
    </div>
    <h2 ref="add">Add Your Comment</h2>
    <p>
      Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
      hac ultrices nulla non netus. Placerat vehicula donec non suscipit
      egestas, augue vel suspendisse. Et felis venenatis blandit sed est
      ultrices, adipiscing urna.
    </p>
    <form @submit="handleSubmit">
      <input type="text" placeholder="Name" v-model="name" required />
      <input
        type="emial"
        placeholder="Email Address"
        v-model="email"
        required
      />
      <textarea placeholder="Comment" v-model="comment" required />
      <p v-if="replyingTo">
        Replying to: <span>{{ replyingTo.name }}</span>
        <i @click="replyingTo = null" />
      </p>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import { Prop, Ref } from "vue-property-decorator"

interface ReplyingTo {
  name: string
  under: number
}

@Options({
  methods: {
    replyClick(name: string, under: number) {
      this.replyingTo = { name, under }
      this.$refs.add.scrollIntoView({ behavior: "smooth" })
    },
    handleSubmit(e: Event) {
      e.preventDefault()
      if (!this.name || !this.email || !this.comment) {
        return
      }
      if (this.replyingTo) {
        this.comments[
          this.comments.findIndex(
            (c: NewsComment) => c.id === this.replyingTo.under
          )
        ].replies.push({
          user: this.name,
          email: this.email,
          text: this.comment,
          time: new Date().toLocaleString(),
          to: this.replyingTo.name,
        })
        this.replyingTo = null
      } else {
        this.comments.push({
          id: this.comments.length,
          user: this.name,
          email: this.email,
          text: this.comment,
          time: new Date().toLocaleString(),
          replies: [],
        })
      }
      this.comment = ""
    },
  },
})
export default class Comments extends Vue {
  @Prop() comments: NewsComment[]
  @Ref("add") add!: HTMLHeadingElement
  name = ""
  email = ""
  comment = ""
  replyingTo: ReplyingTo = null
}
</script>

<style lang="sass" scoped>
$other-text: #444
.comments
  box-sizing: border-box
  padding: 16px 32px 32px
  grid-column: 1 / span 2
  background-color: #fff

  h2
    font-family: "Bitter", serif
    font-size: 24px
    font-weight: bold
    line-height: 28.8px
    color: $text-dark
    margin: 0 0 32px

  .comment
    display: flex
    gap: 16px
    margin-bottom: 32px

    img
      object-fit: cover
      width: 58px
      height: 58px

    &>div
      width: 100%

      .top
        display: flex
        align-items: center
        gap: 16px

        h4
          margin: 0
          font-family: "Bitter", serif
          font-weight: 400
          font-size: 18px
          line-height: 20px
          color: $primary

        p
          font-size: 11px
          color: $text-dim
          margin: 0

        button
          background-color: transparent
          display: inline-block
          margin-left: auto
          color: $primary
          outline: none
          border: none
          font-size: 14px
          line-height: 16.86px

          &:hover
            cursor: pointer
            text-decoration: underline
  p
    margin: 8px 0
    font-size: 13px
    line-height: 20px
    color: $other-text

  .reply
    display: flex
    gap: 16px
    margin-top: 12px

    &>div
      width: 100%

    img
      width: 42px
      height: 42px

    p
      margin: 4px 0

    h5
      @extend h4
      color: $primary
      font-weight: normal
      font-size: 16px
      line-height: 12px

      span
        color: $text-dim

  form
    width: 100%
    display: block

    input
      width: 50%

    textarea
      height: 186px
      resize: none
      width: 100%

    input, textarea
      background-color: #ddd
      margin-top: 8px
      padding: 12px 18px
      border: none
      outline: none
      font-size: 14px
      line-height: 16.86px
      font-family: "Varela Round", sans-serif
      display: block
      box-sizing: border-box

    button
      background-color: $primary
      border: none
      padding: 16px 36px
      color: white
      font-size: 14px
      line-height: 16.86px
      margin-top: 32px

    p
      margin: 0
      box-sizing: border-box
      font-size: 12px
      line-height: 20px
      padding: 4px 12px
      background-color: $primary
      color: white
      position: relative

      span
        font-weight: bold

      i
        background-image: url("@/assets/x.svg")
        display: inline-block
        position: absolute
        right: 12px
        height: 20px
        width: 20px
        background-size: cover
        cursor: pointer
</style>
