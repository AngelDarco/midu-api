console.log('Js Working ...')

const App = ()=>{
    if(window.ethereum){
    console.log(window.ethereum)
    console.log('MetaMask installed ...')
}else{
    console.log('you must install MetaMask first ...')
    
}

};App();