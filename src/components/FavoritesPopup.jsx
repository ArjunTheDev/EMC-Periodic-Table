import { Button, Modal } from 'antd'
import { BookOutlined } from '@ant-design/icons'
import { useContext, useEffect, useState } from 'react'
import { PeriodicTableContext } from '../service/ContextService'
import PeriodicTableContent from '../assets/data/PeriodicTableJSON.json'
import { shortenTheTextByLength } from '../utility/helperFunction'

const FavoritesPopup = () => {
    const [showPopup, setShowPopup] = useState(false)
    const { contextData, updateContextData } = useContext(PeriodicTableContext)
    const [favoriteElement, setFavoriteElement] = useState([])

    useEffect(() => {
        setFavoriteElement(PeriodicTableContent.elements.filter((item) => contextData.includes(item.number)))
    }, [contextData])

    const onDelete = (elementId) => {
        updateContextData(contextData.filter((item) => item !== elementId))
    }

    return (
        <div>
            <Button type='primary' icon={<BookOutlined />} size='large' onClick={() => setShowPopup(true)} danger>
                View Favorites
            </Button>
            <Modal
                open={showPopup}
                title='Your Favorites'
                onCancel={() => setShowPopup(false)}
                footer={null}
            >
                {favoriteElement.map((element, index) => (
                    <div className='grid grid-rows-2 grid-flow-col gap-2 items-center' key={index}>
                        <div className='row-span-2'>
                            <img className='rounded-lg p-1' style={{width: '100px'}} src={element.image.url} alt={element.image.title} />
                        </div>
                        <div className='col-span-2 text-xl'>{`${element.name} (${element.symbol})`}</div>
                        <div className='col-span-2 text-sm'>{shortenTheTextByLength(element.summary)}</div>
                        <div className='row-span-2'>
                            <Button type='primary' danger onClick={() => onDelete(element.number)}>
                                Remove
                            </Button>
                        </div>
                    </div>
                ))}
            </Modal>
        </div>
    )
}

export default FavoritesPopup