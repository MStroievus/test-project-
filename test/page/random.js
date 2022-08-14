class random {
 static randomEmail() {
       return (Math.random().toString(36).replace(/[^a-z]+/g, '') + "@gmail.com")
    };

 static randomPassword() {
         return (Math.random().toString(36).slice(2, 16))
    };

 static randomName() {
         return (Math.random().toString(36).slice(2, 9))
    };
 static randomPhone() {
          return ("+" + Math.random().toString().slice(2,11))
    };

};

module.exports = random;