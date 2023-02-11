import "./footer.css"

const Footer = (props) => {
    const {isOpenPost, setIsOpenPost} = props
    return (
        <footer>
            <div className="footer-title" onClick={() => setIsOpenPost(!isOpenPost)}>
                {isOpenPost ? 'x' : '+'}
            </div>
        </footer>
    )
}

export default Footer