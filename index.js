let btns = document.querySelectorAll('.btn')
let ifram = document.querySelector('output')
let panels = document.querySelectorAll('.panel')
let run = document.querySelector('.run')
let mode = document.querySelector('.mode')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let targetClass = e.target.id
    btns.forEach((btn1) => {
      btn1.classList.remove('active')
    })
    btn.classList.add('active')
    targetClass += '-panel'
    panels.forEach((panel) => {
      if (panel.classList.contains(targetClass)) {
        panel.classList.add('currentPanel')
        panel.classList.remove('hidden')
      } else {
        panel.classList.remove('currentPanel')
        panel.classList.add('hidden')
      }
    })
  })
})

function runCode() {
  var htmlCode = document.querySelector('.html-panel').value
  var cssCode = '<style>' + document.querySelector('.css-panel').value + '</style>'
  var jsCode = '<script>' + document.querySelector('.js-panel').value + '</script>'
  var output = document.getElementById('output')
  output.innerHTML = ''
  var iframe = document.createElement('iframe')
  iframe.className = 'frame-output'
  output.appendChild(iframe)
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document
  iframeDocument.open()
  iframeDocument.write(htmlCode + cssCode)
  iframeDocument.write(jsCode)
  iframeDocument.close()
  console.clear()
}
run.addEventListener('click', runCode)
panels.forEach((panel) => {
  panel.addEventListener('input', runCode)
})
function darkLight() {
  mode.classList.toggle('dark')
  if (mode.classList.contains('dark')) {
    mode.innerHTML = 'Light'
    document.querySelector('body').classList.add('dark-mode')
  } else {
    mode.innerHTML = 'Dark'
    document.querySelector('body').classList.remove('dark-mode')
  }
}
mode.addEventListener('click', darkLight)
