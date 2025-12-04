const inputImage = document.querySelector('#thumbnail')

inputImage.addEventListener('change', (e) => {
    const [file] = inputImage.files
    const imgUpload = document.querySelector('#upload-File')
    if (file) {
        if(imgUpload.src.startsWith('blob')){
            URL.revokeObjectURL(imgUpload.src)
        }
        imgUpload.src = URL.createObjectURL(file)
    }
})