const SCREENSHOT_CONTAINER_SIZE = {
  ipad: {
    md: {
      height: 727,
      width: 559,
    },
    xs: {
      height: 373,
      width: 286,
    },
  },
  iphone: {
    md: {
      height: 727,
      width: 350,
    },
    xs: {
      height: 539,
      width: 260,
    },
  },
  mac: {
    md: {
      height: 727,
      width: 1086,
    },
    xs: {
      height: 191,
      width: 286,
    },
  },
  web: {
    md: {
      height: 727,
      width: 1086,
    },
    xs: {
      height: 191,
      width: 286,
    },
  },
} as const

export { SCREENSHOT_CONTAINER_SIZE }
