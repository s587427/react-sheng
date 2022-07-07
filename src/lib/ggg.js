
/**
 * @param {*} r 傳入require.context(dir, deep, regx) str dir資料夾路徑, boolean deep是否深層尋找, regx正則表達
 */

export const importAll = (r) => {
  let result = {}
  let part = {}
  r.keys().forEach(key=> {
      //console.log(key, key.lastIndexOf('/'), key.substring(key.lastIndexOf('/') + 1, key.length))         
      /**
       * key = 檔名
       * r(key) = 檔案的模組
       */
      result[key] = r(key)
  })

  Object.values(result).forEach(item=>{
    Object.values(item).forEach((d, index) => part[d.name] = d)
  })

  /**
   * part = 所有匹配到檔案內的所有export資料
   */
  return {result, part}
}


