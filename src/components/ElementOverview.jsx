import { useContext, useEffect, useState } from 'react'
import PeriodicTableContent from '../assets/data/PeriodicTableJSON.json'
import { useParams } from 'react-router-dom'
import BookMarkIcon from './BookMarkIcon'
import { PeriodicTableContext } from '../service/ContextService'

const ElementOverview = () => {
    const [activeElement, setActiveElement] = useState({})
    const { id } = useParams()
    const { contextData, updateContextData } = useContext(PeriodicTableContext)

    useEffect (() => {
        setActiveElement(PeriodicTableContent.elements.filter((element) => element.number == id)[0])
    }, [])

    return (
        <>
            { Object.keys(activeElement).length !== 0 ?
                <div className="flex flex-col items-center mt-10">
                    <div className="flex flex-row">
                        <div className="text-4xl mb-3.5">Overview of <span className="font-bold">{activeElement.name}</span></div>
                        <BookMarkIcon updateFavorites={updateContextData} favorites={contextData} elementId={activeElement.number} />
                    </div>
                    <div className="flex flex-col items-center mb-3.5">
                        <img className="rounded-lg" style={{width: "300px"}} src={activeElement.image.url} alt={activeElement.image.title} />
                        <p className="text-sm italic mt-2">{activeElement.image.attribution}</p>
                    </div>
                    <div>
                        <p className='w-[75rem] p-4 text-lg text-center'>{activeElement.summary}</p>
                    </div>
                    <div className="text-sm w-50 grid grid-cols-2 gap-4 mb-3.5">
                        <p className="text-lg"><span className="font-bold">Appearance: </span> {activeElement.appearance}</p>
                        <p className="text-lg"><span className="font-bold">Atomic Mass: </span>{activeElement.atomic_mass}</p>
                        <p className="text-lg"><span className="font-bold">Boiling Point: </span>{activeElement.boil}</p>
                        <p className="text-lg"><span className="font-bold">Category: </span>{activeElement.category}</p>
                        <p className="text-lg"><span className="font-bold">Density: </span>{activeElement.density}</p>
                        <p className="text-lg"><span className="font-bold">Discovered By: </span>{activeElement.discovered_by}</p>
                        <p className="text-lg"><span className="font-bold">Melting Point: </span>{activeElement.melt}</p>
                        <p className="text-lg"><span className="font-bold">Molar Heat: </span>{activeElement.molar_heat}</p>
                        <p className="text-lg"><span className="font-bold">Named By: </span>{activeElement.named_by}</p>
                        <p className="text-lg"><span className="font-bold">Period: </span>{activeElement.period}</p>
                        <p className="text-lg"><span className="font-bold">Group: </span>{activeElement.group}</p>
                        <p className="text-lg"><span className="font-bold">Phase: </span>{activeElement.phase}</p>
                        <p className="text-lg w-96"><span className="font-bold">Electron Configuration: </span>{activeElement.electron_configuration}</p>
                        <p className="text-lg w-96"><span className="font-bold">Electron Affinity: </span>{activeElement.electron_affinity}</p>
                        <p className="text-lg w-96"><span className="font-bold">Electronegativity (Pauling scale): </span>{activeElement.electronegativity_pauling}</p>
                        <p className="text-lg w-96"><span className="font-bold">Ionization Energies: </span>{activeElement.ionization_energies.join(', ')}</p>
                    </div>
                    <div className='mb-10'>
                        <p className="text-lg text-sky-700 underline-offset-4"><a target="_blank" href={activeElement.source}>{activeElement.source}</a></p>
                    </div>
                </div> :
                <div>Loading...</div>
            }
        </>
    );
}

export default ElementOverview