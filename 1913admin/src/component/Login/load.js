import React from 'react'
import Loadable from 'react-loadable'
import './load.less'
const loadingComponent=()=>{
    return(
        <div className="test">Loading</div>
    )
}
export default Loadable({
    // 需要被懒加载的组件
    loader:()=>import('./index.js'),
    // 在懒加载过程中显示的过程
    loading:loadingComponent
})