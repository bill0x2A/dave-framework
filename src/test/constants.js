export const domTree = {
    type: 'ul',
    attrs: {
        'class': 'list'
    },
    children: [
      {
        type: 'li',
        attrs: {
          class: 'list-item',
          style: {
            color: 'red'
          }
        },
      },
      {
        type: 'li',
        attrs: {
          class: 'list-item',
          style: {
            color: 'blue'
          }
        },
      } 
    ]
}