const cp_plainText = document.querySelector('#plainText'); // 평서문 적는곳
const cp_runEncryption = document.querySelector('#runEncryption'); //암호화 시작버튼
const cp_cipherText = document.querySelector('#cipherText'); // 암호문 출력하는곳

cp_runEncryption.addEventListener('click', ()=>{

    cp_cipherText.value = 5;
});





const p = 7;
const q = 17;
const n = p*q;
const euler_phi_value = (p-1)*(q-1);
let e = 2;





//최대공약수 도출 함수 (유클리드 호제법 이용)
const gcd = (num1, num2) =>{
    while(num2 >0){
        let temp = num1 % num2;
        num1 = num2;
        num2 = temp;
    }
    return num1;
}


//공개키(e) 값 도출. 오일러값보다 작으면서 서로소인 값
const public_key = () =>{
    while(e < euler_phi_value && gcd(e,euler_phi_value) != 1){
        e += 1;
    }
    return e;
}



//개인키(d) 값 도출
const privatekey = () =>{
    let d = 1;
    while((public_key() * d) % euler_phi_value != 1){
        d += 1;
    }
    return d;
}


//공개키 :  n, e
//비밀키 :  d






