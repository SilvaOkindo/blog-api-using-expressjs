export const createBlogValidationSchema = {
  title: {
    isLength: {
      options: { min: 20, max: 200 },
      errorMessage: "Title must be at least 20 characters with a max of 200 characters",
    },
    notEmpty: {
      errorMessage: "Title cannot be empty",
    },
    isString: {
      errorMessage: "Title must be a string",
    },
  },
  content: {
    isLength: {
      options: { min: 20 },
      errorMessage: "Content must be at least 20 characters long",
    },
    notEmpty: {
      errorMessage: "Content cannot be empty",
    },
    isString: {
      errorMessage: "Content must be a string",
    },
  },
  category: {
    notEmpty: {
      errorMessage: "Category cannot be empty",
    },
    isString: {
      errorMessage: "Category must be a string",
    },
  },
  slug: {
    notEmpty: {
      errorMessage: "Slug cannot be empty",
    },
    isString: {
      errorMessage: "Slug must be a string",
    },
  },
  published: {
    isBoolean: {
      errorMessage: "Published should be a boolean value",
    },
  },
};
