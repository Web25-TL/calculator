export const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];

export const operators = [
  {
    char: '/',
    value: '/',
    op: function(l, r) {
      return l / r;
    }
  },
  {
    char: 'x',
    value: '*',
    op: function(l, r) {
      return l * r;
    }
  },
  {
    char: '-',
    value: '-',
    op: function(l, r) {
      return l - r;
    }
  },
  {
    char: '+',
    value: '+',
    op: function(l, r) {
      return l + r;
    }
  },
  {
    char: '=',
    value: '='
  }
];

export const specials = ['C', '+/-', '%'];
