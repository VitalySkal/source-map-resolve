export function u1(url) {
  return "code\n/*# sourceMappingURL=" + url + " */"
}

export function u2(url) {
  return "code\n//# sourceMappingURL=" + url
}

export function u3(url) {
  return "code\n/*\n# sourceMappingURL=" + url + "\n*/"
}

export function u4(url) {
  return "code\n/*\n//# sourceMappingURL=" + url + "\n*/"
}

export function read(x) {
  return function() {
    return x
  }
}

export function Throws(x) {
  throw new Error(x)
}

export function identity(x) {
  return x
}

export function asyncify(syncFn) {
  return function() {
    var args = Array.prototype.slice.call(arguments)
    var callback = args.pop()
    var result
    setImmediate(function() {
      try {
        result = syncFn.apply(this, args)
      } catch (error) {
        return callback(error)
      }
      callback(null, result)
    })
  }
}

// export const u1 = u1
// export const u2 = u2
// export const u3 = u3
// export const u4 = u4
// export const read = read
// export const Throws = Throws
// export const identity = identity
// export const asyncify = asyncify
