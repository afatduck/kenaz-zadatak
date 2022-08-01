class Maybe<T> {
  constructor(private value: T | null) {}

  static of<T>(value: T): Maybe<T> {
    return new Maybe(value)
  }

  isNothing(): boolean {
    return this.value === null
  }

  isSome(): boolean {
    return !this.isNothing()
  }

  get(): T | null {
    return this.value
  }

  map<U>(f: (value: T) => U): Maybe<U> {
    if (this.isNothing()) {
      return new Maybe(null)
    }
    return new Maybe(f(this.value))
  }
}

export { Maybe }
