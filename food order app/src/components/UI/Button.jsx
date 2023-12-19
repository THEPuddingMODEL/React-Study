export default function Button({children, textOnly, className, ...props}){

    let cssClss = textOnly? 'text-button' : 'button'
    cssClss += ' ' + className

    return <button className={cssClss} {...props}>
        {children}
    </button>
}