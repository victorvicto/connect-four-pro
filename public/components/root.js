const templ = `
  <div>count is {{ count }}</div>
  <button @click="count++">Add</button>
`
                

export default {
    data() {
      return { count: 0 }
    },
    template: templ
  }