const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const kapat = document.getElementById("kapat")
let arr = []


// !sepet


// // !SEPET EKLEME


if(document.body.firstElementChild.textContent==='alisveris'){
    const btn = document.querySelectorAll('.ekle')

    btn.forEach(btn => {
        btn.addEventListener('click', event => {
            let img = event.target.parentElement.parentElement.firstElementChild.src
            let type = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent
            let price = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.textContent
            let count = 1
            


            let urun = {
                'img':img,
                'type':type,
                'price':price,
                'count':count
            }
            arr.push(urun)
            localStorage.setItem('urun',JSON.stringify(arr))
        });
        
      });
    
}else if(document.body.firstElementChild.textContent==='sepet'){
    let getLs = JSON.parse(localStorage.getItem('urun'))
    const urunlerTable = document.querySelector('.urunler') 

    for(let i=0; i<getLs.length; i++){
        let tr = document.createElement('tr')

        let tdX = document.createElement('td')
        tdX.innerHTML = '<i class="sil fa fa-times-circle"></i>'
        tr.append(tdX)

        let tdImg = document.createElement('td')
        let lsImg = document.createElement('img')
        lsImg.src = getLs[i].img
        tdImg.append(lsImg)
        tr.append(tdImg)

        let tdType = document.createElement('td')
        tdType.textContent = getLs[i].type
        tr.append(tdType)

        let tdPrice = document.createElement('td')
        tdPrice.textContent = getLs[i].price
        tdPrice.classList.add('stokPrice')
        tr.append(tdPrice)

        let tdCount = document.createElement('td')
        let inpCount = document.createElement('input')
        inpCount.value = Number(getLs[i].count)
        inpCount.type = 'number'
        inpCount.classList.add('adet')
        tdCount.append(inpCount)
        tr.append(tdCount)

        let tdTotal = document.createElement('td')
        tdTotal.textContent = `${(Number(tdPrice.textContent) * Number(inpCount.value)).toFixed(3)}`
        tdTotal.classList.add('stokPrice')
        tdTotal.classList.add('toplam')
        tr.append(tdTotal)     

        urunlerTable.append(tr)
    }
    const sil = document.querySelectorAll('.sil')
    let newArr = getLs
    sil.forEach(sil => {
        sil.addEventListener('click', event => {
            for(let i=0; i<getLs.length; i++){
                if(getLs[i].img == event.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.src){
                    newArr.splice(i,1)
                    let removeParent = event.target.parentElement.parentElement
                    removeParent.style.display='none'
                }
            }
            localStorage.setItem('urun',JSON.stringify(newArr))

            getLs = JSON.parse(localStorage.getItem('urun'))

            let araFiyat = 0
            for(let i=0; i<getLs.length; i++){
                araFiyat += (getLs[i].price) * (getLs[i].count)
            }
        
            araToplam.textContent = `${araFiyat.toFixed(3)}`
        });
      });
    
    const adet = document.querySelectorAll('.adet')

    const araToplam = document.querySelector('.araToplam')
    let calcTotal = 0

    for(let i=0; i<getLs.length; i++){
        calcTotal += Number(getLs[i].price)
    }
    adet.forEach(adet=>{
        adet.addEventListener('change',event=>{
            let total = event.target.parentElement.nextElementSibling
            let count = Number(event.target.value)
            let urunFiyat = Number(event.target.parentElement.previousElementSibling.textContent)
            total.innerHTML = `${(count*urunFiyat).toFixed(3)}`

            let newArr = getLs
            for(let i=0; i<getLs.length; i++){
                if(getLs[i].img == event.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.src){
                    newArr[i].count = Number(event.target.value)

                }
            }
            localStorage.setItem('urun',JSON.stringify(newArr))
            getLs = JSON.parse(localStorage.getItem('urun'))

            let araFiyat = 0
            for(let i=0; i<getLs.length; i++){
                araFiyat += (getLs[i].price) * (getLs[i].count)
                
            }
        
            araToplam.textContent = `${araFiyat.toFixed(3)}`

            
            
            
        })  

    })

            araToplam.textContent = `${calcTotal.toFixed(3)}`
            toplamkey = document.querySelector(".toplamkey")
            toplamvalue = document.querySelector(".toplamvalue")
            toplamvalue.textContent = araToplam.textContent
            
            
    

    }

    











// const urun = document.getElementsByClassName("pro")
// const cart_btn = document.getElementsByClassName("fa-solid fa-cart-shoppin");
// const delete_btn =document.getElementsByClassName("fa fa-times-circle")
// const sepet =document.getElementsByClassName("fa-solid fa-cart-shopping")

// class Shopping{
//     constructor(image,title,price){
//         this.image =image
//         this.title = title
//         this.price = price
//     }
// }

//  for (let i = 0; i < urun.length; i++) {
//     cart_btn.addEventListener("click",function(e){
//         let baslik =urun[i].getElementsByTagName(h5)
//         let ücret = urun[i].getElementsByTagName(h4)
//         let resim = urun[i].getElementsByTagName(img)
//     })
    
//  }


if (bar){
    bar.addEventListener("click", ()=> {
        nav.classList.add("active");
    })
}

if (kapat){
    kapat.addEventListener("click", ()=> {
        nav.classList.remove("active");
    })
}



// // Ürün bilgilerini saklayan bir JavaScript nesnesi
// const arac = [
//   { class: "pro",
//     image: "./img/chopper/chopper1.jpg",
//     isim: "CHOPPER",
//     fiyat: 50.000,
//   }, 
//   {
//     class: "pro",
//     image: "./img/racing/racing1.jpg" ,
//     isim: "RACİNG",
//     fiyat: 30.000,
//   },
//   {
//     class: "pro",
//     image: "./img/cros/cros1.jpg",
//     isim: "CROSS",
//     fiyat: 20.000,
//   },
//   {
//     class: "pro",
//     image: "./img/naked/naked1.jpg",
//     isim: "NAKED",
//     fiyat: 50.000,
//   },
//   {
//     class: "pro",
//     image: "./img/touring/touring2.jpg",
//     isim: "TOURİNG",
//     fiyat: 50.000,
//   },
//   {
//     class: "pro",
//     image: "./img/scooter/scooter1.jpg",
//     isim: "SCOOTER",
//     fiyat: 50.000,
//   },
//   {
//     class: "pro",
//     image: "./img/atv/atv1.jpg",
//     isim: "ATV",
//     fiyat: 50.000,
//   },
//   {
//     class: "pro",
//     image: "./img/utv/utv1.jpg",
//     isim: "UTV",
//     fiyat: 50.000,
//   }
  
// ];
  
//   // Sepet verilerini saklayan bir JavaScript dizi
//   var cart = [];
  
//   // Sepete ürün eklemek için işlev
//   function addToCart(arac) {
//     sepet.push(arac);
//   }
  
//   // Sepet içeriğini görüntülemek için işlev
//   function viewCart() {
//     console.log(sepet);
//   }
  
//   // Sepete ürün eklemek
//   addToCart(arac);
  
//   // Sepet içeriğini görüntülemek
//   viewCart();
  