function ajaxPromise(queryUrl) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', queryUrl, true);
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.responseText)
        }
      }
    }
  })
}

ajaxPromise('htpp://www.baidu.com')
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  })