let store = [];

function recipes() {
  $('#record-recipe').submit(event => { 
    event.preventDefault()
  })

 function eventListeners() {
    this.recipes = document.getElementById('recipes')
    this.newForm.addEventListener('submit', this.getForm)
  }

  function newForm() {
    return
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://cookbook-git-master.malasia-415.vercel.app/";
  }
    fetch(proxyurl)
    .then(response => response.json())

    .then (responeJson => {
      let newForm = responsJson.results
      let getForm = [];


      function handleSubmit(event) {
        event.preventDefault();
        const newForm = event.target.getForm.value;
        this.getForm(newForm);
        this.props.history.goBack();
  
    //   .then((response) => {
    //     if (response.status === 400) {
    //       throw new Error(response.error);
    //     }
    //     return response.json();
    // })
  }
  console.log(newForm);
      this.newForm;
      this.props.history.push(' ');
  
  
    .then(() => {
      // set in local storage
      window.localStorage.getForm("token", getForm.authToken);
      // update state
      this.setState({ isAuth: true, name: getForm.name });
      console.log(getForm.name, "is logged in!");
      // after login redirect to to journal
      this.props.history.push("/recod-recipe");
      // CHANGE THIS BACK TO JOURNAL-SETUP LATER
      // this.props.history.push("/dashboard");
    })
  

      newForm.forEach(newForm => {
        getForm += `<div class="recipes"></div>`
      })

      $("#newForm").append();
    })

    
  var toInsert = document.createElement("div");
    toInsert.innerHTML = "text to insert";

  updateForm(event) {
    const newForm = event.target.value;
    this.context.updateForm(newForm);
  }



