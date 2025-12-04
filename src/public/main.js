const listBtn = document.querySelectorAll('[status]')
let url = new URL(window.location.href)

listBtn.forEach(item => {
    item.addEventListener('click', () => {
        const status = item.getAttribute('status')
        if (status != '') {
            url.searchParams.set('status', status)
        }
        else {
            url.searchParams.delete('status');

        }
        window.location.href = url
    })
})

const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const search = e.target.children[0].value
    if (search?.length > 0) {
        url.searchParams.set('keyword', search)
    }
    else {
        url.searchParams.delete('keyword')
    }
    window.location.href = url

})

const listBtnPage = document.querySelectorAll('[curPage]')
listBtnPage.forEach(item => {
    item.addEventListener('click', () => {
        const pageCur = item.getAttribute('curPage')
        if (pageCur != 1) {
            url.searchParams.set('page', pageCur)
        }
        else {
            url.searchParams.delete('page')
        }
        window.location.href = url

    })
})


const listBtnChange1 = document.querySelectorAll('[changeStatus]')
const formPesuado = document.querySelector('#formPeseudo')
listBtnChange1.forEach(item => {
    item.addEventListener('click', (e) => {
        const status = item.getAttribute('changeStatus') == 'active' ? 'inactive' : 'active'
        const id = item.getAttribute('id')
        const dataPath = formPesuado.getAttribute('dataPath')
        formPesuado.action = dataPath + `${id}/${status}?_method=PATCH`
        formPesuado.submit()
    })
})


const inputGetIdsChanges = document.querySelector("#idsChangeStatus")
const inputCheckBoxChanges = document.querySelectorAll('[idNeedChange]')


const selectAllCheckBox = document.querySelector('[AllChange]')
selectAllCheckBox.addEventListener('click', () => {
    if (selectAllCheckBox.checked) {
        inputCheckBoxChanges.forEach(item => item.checked = true)
    }
    else {
        inputCheckBoxChanges.forEach(item => item.checked = false)
    }
})

inputCheckBoxChanges.forEach(item =>
    item.addEventListener('click', () => {
        const lengthChecked = document.querySelectorAll('[idNeedChange]:checked').length
        if(lengthChecked == inputCheckBoxChanges.length){
            selectAllCheckBox.checked = true
        }
        else{
            selectAllCheckBox.checked = false
        }
    })
)

const formChangeStatusMulti = document.querySelector("#formChangeStatus")
formChangeStatusMulti.addEventListener('submit', (e)=>{
    const inputChecked =  document.querySelectorAll('[idNeedChange]:checked')
    const ids = []
    inputChecked.forEach(item => ids.push(item.value))
    inputGetIdsChanges.value = ids.join(',')
})


const btnDelete = document.querySelectorAll('[btnDelete]')
const formDelete = document.querySelector('#form-delete-item')
console.log(formDelete)
btnDelete.forEach(button =>{
    button.addEventListener('click', ()=>{
       const isConfirm = confirm("Bạn có chắc muốn xoá sản phẩm này không vậy ????")
       if(isConfirm){
        formDelete.action = formDelete.getAttribute('dataPath') + `${button.id}`+'?_method=delete'
        formDelete.submit()
       }
    })
})