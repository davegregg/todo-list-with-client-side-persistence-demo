{

  // Q&A demo code

  let variable1 = "This is variable1!"
  const variable2 = "This is variable2!"
  var variable3 = "This is variable3!"
  variable4 = "This is variable4!"

  // hoisting: pull to the top

  let explanation = `
    So I can write a paragraph of text in here.

    And continue with another ${4 + 5} on a different line,
    without having to write any special ${variable3} in order
    to instruct the computer to allow me to create a
    multi-line string.
  `

  // let and const are "block scoped"
  // var is "function scoped" and "hoisted"
  // global variables are defined without a keyword
  // and are always scoped to the global scope, no matter
  // where you defined them.
  if (explanation.length > 0) {
    let myNewVar = 343
    const myNewVar2 = 343
    var myNewVar3 = 343
    variable5 = "This is variable4!"
  }
  console.log(myNewVar3)

  const detailsElementString = createDetails("hello", "what is your name?")
  console.log(detailsElementString)

  function createDetails (summary, contents) {
    variable6 = "This is variable4!"
    var myNewVar3 = 343
    let detailsTemplate = `
      <details>
        <summary>${summary}</summary>
    
        ${contents}
      </details>
    `

    return detailsTemplate
  }

  // mainElement.innerHTML = createDetails("Click here for more details", "This is the content of the details element.")


  // let emailTemplate = `
  //   Hello, ${recipientName}! ${companyName} has filed a claim against your account! Please reply to ${replyEmailAddress} within ${timeLimit}, or your account will be frozen!
  // `


  }