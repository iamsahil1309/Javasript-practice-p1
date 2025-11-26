class User {
  constructor(username,email,password) {
    this.username = username
    this.password = password
    this.email = email
  }

  encryptPassword () {
    return `${this.password}abc`
  }
}

class Teacher extends User {
  constructor(username) {
    super(username)
  }

  addCourse() {
    console.log(`course added by ${this.username}`)
  }
}

const tea = new Teacher("yugji")
tea.addCourse()
console.log(tea instanceof User)