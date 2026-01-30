

const Form = () => {

    const formAction = (formData : any) => {
        const userData = {
            name : formData.get('name'),
            email : formData.get('email')
        };

        console.log("user data : ", userData);
    }

  return (
    <form action={formAction}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name" name="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email" name="email" />

        <button type="submit">Submit</button>
    </form>
  )
}

export default Form
