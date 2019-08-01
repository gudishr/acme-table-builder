class TableBuilder {

  constructor(columnHeader, data, selector) {
    this.columnHeader = columnHeader;
    this.data = data;
    this.selector = selector;
  }

  init() {
    this.render();
  }

  render() {
    const tableHeaders = this.columnHeader.map(header => `<th id='${header.key}'> ${header.title} </th>`)
    document.querySelector(this.selector).innerHTML = tableHeaders;

    // const tableData = this.data.map(emp => `<td>${emp.name}</td>`)
    // document.querySelector(this.selector).innerHTML = tableData
  }

}


const usersTable = new TableBuilder(
  [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Position',
      key: 'role'
    },
    {
      title: 'Salary',
      key: 'salary',
      type: 'number'
    }

  ],
  [
    {
      name: 'Moe',
      role: 'CEO',
      salary: 80000
    },
    {
      name: 'Larry',
      role: 'CTO',
      salary: 70000
    },
    {
      name: 'Curly',
      role: 'CPO',
      salary: 75000
    },
    {
      name: 'Shep',
      role: 'Security Officer',
      salary: 1000000 
    }
  ],
  '#usersTable'//id of DOM element
);
usersTable.init();











