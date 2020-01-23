exports.isEmail = (email) => {
        const reg = /^[\w]{1}[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        if (isEmail(req.body.email)) {
          return true
        };
};

exports.isSite = () => {

};

exports.isString = () => {

};