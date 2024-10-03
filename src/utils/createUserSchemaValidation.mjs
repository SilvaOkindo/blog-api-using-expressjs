export const createBlogValidationSchema = {
    firstName: {
        notEmpty: {
            errorMessage: "first name cannot be empty"
        },
        isString: {
            errorMessage: "first name must be a string"
        }
    },


    secondName: {
        notEmpty: {
            errorMessage: "second name cannot be empty"
        },
        isString: {
            errorMessage: "second name must be a string"
        }
    },


    username: {
        isLength: {
            options: {min: 5, max: 32},
            errorMessage: "username must be at least 5 characters and maximum of 32 characters"
        },
        notEmpty: {
            errorMessage: "username cannot be empty"
        },
        isString: {
            errorMessage: "username must be a string"
        }
    },

    email: {
        notEmpty: {
            errorMessage: "email cannot be empty"
        },
        isString: {
            errorMessage: "email must be a string"
        }
    },

    password: {
        notEmpty: {
            errorMessage: "password cannot be empty"
        },
        isString: {
            errorMessage: "password must be a string"
        }
    },
   
}