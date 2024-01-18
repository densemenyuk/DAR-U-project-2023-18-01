const users = [
  {
    name: "Harry",
    email: "hpotter@hogwards.com",
    password: "wizzardzrule777",
    age: 17,
    gender: "male",
  },
  {
    name: "Hermione",
    email: "hgrainger@hogwards.com",
    password: "qDjVontJqoQdkvl",
    age: 17,
    gender: "female",
  },
  {
    name: "Rick",
    email: "rsanchez@science.com",
    password: "LbmtDXfzYJwDTKA",
    age: 78,
    gender: "male",
  },
];


function checkInfo() {
  let login = document.getElementById("emailLogin").value;
  if (login === "") {
    document.getElementById("login-err").classList.add("field-error-visible");
    return;
  } else {
    document.getElementById("login-err").classList.remove("field-error-visible")
  }

  let password = document.getElementById("passwordLogin").value;
  if (password === "") {
    document.getElementById("password-err").classList.add("field-error-visible")
    return;
  } else {
    document.getElementById("password-err").classList.remove("field-error-visible")
  }

  // arr[i].name

  for (let i = 0; i < users.length; i++) {
    if (login === users[i].email && password === users[i].password) {
      alert(`Welcome, ${users[i].name}!`)
      document.getElementById("account-err").classList.remove("acc-error-visible");
      break;
    } else {
      document.getElementById("account-err").classList.add("acc-error-visible")
    }
  }

  // window.location.href = 'user-page.html';


  const v = document.getElementById("myForm");
  v.reset();
}


function onLoginChange() {
  document.getElementById("login-err").classList.remove("field-error-visible")
}
function onPasswordChange() {
  document.getElementById("password-err").classList.remove("field-error-visible")
}


function regInfo() {
  let name = ((document.getElementById('name').value));
  let email = ((document.getElementById('email').value));
  let password = ((document.getElementById('password').value));
  let age = ((document.getElementById('age').value));
  // const isMale = document.querySelectorAll("input[name='gender']")[0].checked;
  const isFemale = document.querySelectorAll("input[name='gender']")[1].checked;
  let gender = 'male';

  if (isFemale) {
    gender = 'female'
  }

  

  let newUser = {
    name,
    email,
    password,
    age,
    gender
  };

  // Проверка зарегистрированого пользователя

  let checkEmailInArr = document.getElementById("email").value;
  for (let i = 0; i < users.length; i++) {
    if (checkEmailInArr === users[i].email) {
      alert("A user with this Email is already registered!")
      return;
    } else {
  
    }
  }

  // Проверка работоспособности кода
  users.push(newUser);


  console.log("Новый юзер", newUser);
  console.log("Новый массив", users);

  // Имя регистрации
  let login = document.getElementById("name").value;
  if (login === "") {
    document.getElementById("name-err").classList.add("registration-error-visible")
    return;
  } else {
    document.getElementById("name-err").classList.remove("registration-error-visible")
  }

  // Почта регистрации
  let emailRegistration = document.getElementById("email").value;
  if (emailRegistration === "") {
    document.getElementById("email-err").classList.add("registration-error-visible")
    return;
  } else {
    document.getElementById("email-err").classList.remove("registration-error-visible")
  }

  // Пароль регистрации
  let passwordRegistration = document.getElementById("password").value;
  if (passwordRegistration === "") {
    document.getElementById("password-err-registration").classList.add("registration-error-visible")
    return;
  } else {
    document.getElementById("password-err-registration").classList.remove("registration-error-visible")
  }

  let passwordShort = document.getElementById("password").value;
  if (passwordShort.length < 8) {
    document.getElementById("passwordShort").classList.add("registration-error-visible")
    return;
  } else {
    document.getElementById("passwordShort").classList.remove("registration-error-visible")
  }

  // Возраст регистрации
  let ageRegistration = document.getElementById("age").value;
  if (ageRegistration === "") {
    document.getElementById("age-err").classList.add("registration-error-visible")
    return;
  } else {
    document.getElementById("age-err").classList.remove("registration-error-visible")
  }

  // Гендер регистрации
  const genderRegistration = document.querySelectorAll("input[name='gender']")[1].checked;
  if (document.querySelectorAll("input[name='gender']")[1].checked || document.querySelectorAll("input[name='gender']")[0].checked) {
    document.getElementById("gender-err").classList.remove("genderRegistration-error-visible")
    return;
  } else {
    document.getElementById("gender-err").classList.add("genderRegistration-error-visible")
  }

}

// Имя регистрации
function onNewNameChange() {
  document.getElementById("name-err").classList.remove("registration-error-visible")
}

// Емеил регистрации
function OnNewEmailChange() {
  document.getElementById("email-err").classList.remove("registration-error-visible")
}

// Пароль регстрации
function OnNewPasswordChange() {
  document.getElementById("password-err").classList.remove("registration-error-visible")
}

// Возраст регистрации
function onNewAgeChange() {
  document.getElementById("age-err").classList.remove("registration-error-visible")
}

// Гендер регистрации
function onNewGenderChange() {
  document.getElementById("gender-err").classList.remove("genderRegistration-error-visible")
}











