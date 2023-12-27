import React from 'react'
import { 
    Circle,
    Center,
    IconButton
} from '@chakra-ui/react'
import { HiOutlineShoppingCart } from "react-icons/hi"

const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                aria-label='CartWidget'
                icon={<HiOutlineShoppingCart />}
                size='md'
                fontSize='20px'
                mr='1'
            />
            <Circle as='span' bg='white' w='24px' h='24px'>
                <Center fontWeight='bold' fontSize='xs'>
                    0
                </Center>
            </Circle>
        </div>
    )
}

export default CartWidget