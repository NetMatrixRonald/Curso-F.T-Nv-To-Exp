

interface Props {
    tittle: string,
    description?: string;
}


export const CustomHeader = ({ tittle, description }: Props) => {
    return (

        <div className='content-center'>
            <h1 data-testid="tittle">{tittle}</h1>
            {
                description && (
                    <p data-testid = 'des' className="descrip">{description}</p>
                )
            }
            
        </div>

    )
}

export default CustomHeader
