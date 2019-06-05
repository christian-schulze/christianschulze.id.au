const safeGet = (obj, path, def) => {
  return path.split(".").reduce((memo, segment) => {
    return memo && segment in memo ? obj[segment] : def
  }, obj)
}

export default safeGet
