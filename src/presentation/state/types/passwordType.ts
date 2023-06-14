const testfornumbers = /[0-9]/;
const testforlowercase = /[a-z]/;
const testforuppercase = /[A-Z]/;
const testforspecial = /[\W_]/;
const testforlength = /^.{6,20}$/;
const testDict = { 'Number reuired': testfornumbers, 'Lowercase reuired': testforlowercase, 'Uppercase reuired': testforuppercase, 'Special character reuired': testforspecial, 'Length is invalid': testforlength }


export const checkPassword = (password: string): string[] => {
    const errors: string[] = []
    for (const [key, value] of Object.entries(testDict)) {
        if(value.test(password) === false) errors.push(key)
    }
    return errors
}