import React, { Component } from 'react'
import marked from 'marked'
import Button from './Button'

const initiTextMark=`
# H1 header
## H2 subheader
[freeCodeCamp](https://www.freecodecamp.org/learn/)

\`<article></article>\`
\`\`\`
console.log("I'm proggraming JSX")
\`\`\`  
- li item 1

- li item 2

- li item 3

> BlockQuote!

![ReactJS](https://www.technoscore.com/images/services/react-js-icon.png)

**These words are in blond-text**
`
class MakdPrev extends Component{
    constructor(props){
        super(props)
        this.state={
            text:initiTextMark,
            name:'editor',
            active:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }
    handleClick=()=>{
        if(!this.state.active){
            this.setState({
                name:"preview",
                active:true
            })
        }
        else{
            this.setState({
                name:"editor",
                active:false
            })
        }
    }
    handleChange=(e)=>{
        this.setState({
            text:e.target.value
        })
    }
    render(){
        const {text,name,active}=this.state;
        const transMarked=marked(text, {breaks:true});
        return(
            
            <section>
                <div className="card text-center">
                <Button name={name} handleFunction={this.handleClick}/>
                </div>
                
            {!active&&<article  >
                    <form className="d-flex flex-xl-column flex-wrap ">
                    <textarea className="form-control form-control-lg"  rows="19" id="editor" value={text} onChange={
                        this.handleChange
                    }></textarea>
                    </form>
                </article>
    }           
             {active&&
             <div className="container-fluid">
             <article className="p-5" id="preview" dangerouslySetInnerHTML={{__html:transMarked}}>
             
                </article>
                </div> 
                }
                


                
            </section>
        )
    }
}

export default MakdPrev;