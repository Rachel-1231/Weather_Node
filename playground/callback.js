var getUser = (id, callback) => {
    var user= {
        number: id,
        manager: 'Umesh'
    };
    setTimeout(()=>{
        callback(user);
    },3000);
};
getUser(31,(user)=>{
    console.log(user);
});
    setTimeout(()=>{
    console.log('Am google');
    });
console.log('Iam at last');