
function fetchMock() {
    //'https://pretest.wayaa.com/crm-api/loan-product/detail?id=4'
    fetch("/loan-product/detail",{
        method:'POST',
        headers:{
            "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
        },
        body:'id=4'
    }).then(res => {
        if(res.status !== 200){
            console.log(res)
            return;
        }else{
            res.json().then(data => {
                console.log(data);
            }).catch(err => {
                console.log('res.json():' + err)
            });
        }
    }).catch(err => {
        console.log('fetch:' + err)
    });
}

export default {
    fetchMock
}
