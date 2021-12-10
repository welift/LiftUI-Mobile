import dayjs from "dayjs"

export const getConstraints = (constraintsArray) => {
  let constraints = {}
  if (constraintsArray) {
    constraintsArray?.forEach(constraint => {
      constraints[constraint] = definedConstraints[constraint]
    })
  }

  return constraints
}

const definedConstraints = {
  phoneNumber: {
    presence: true,
    format: {
      pattern: "^[+]?[(]?[0-9]{3}[)]?[ ]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}",
      message: "is not valid",
    }
  },
  street: {
    presence: true,
  },
  city: {
    presence: true,
  },
  postalCode: {
    presence: true,
  },
  state: {
    presence: true,
  },
  firstName: {
    presence: true,
  },
  lastName: {
    presence: true,
  },
  name: {
    presence: true,
  },
  lifterCount: {
    presence: true,
    numericality: {
      lessThanOrEqualTo: 10,
      message: 'Max number of lifters is 10'
    }
  },
  hoursCount: {
    presence: true,
    numericality: {
      lessThanOrEqualTo: 8,
      message: 'Max number of hours is 8'
    }
  },
  startTime: {
    presence: true,
    datetime: true
  },
  email: {
    presence: true,
    email: true,
  },
  dob: {
    presence: true,
    datetime: true,
  },
  dob18: {
    datetime: {
      dateOnly: true,
      latest: dayjs().subtract(17, 'years'),
      message: "^You must be 17 or older to become a lifter."
    }
  },
  companyName: {
    presence: true,
  },
  totalCredits: {
    presence: true,
    numericality: true
  },
}