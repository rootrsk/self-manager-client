import React from 'react'
import { motion } from "framer-motion"
function Task() {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerDirection: -1
          }
        }
      }
      
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }
      
      return (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={item} size={50} />
          <motion.li variants={item} size={50} />
        </motion.ul>
      )
}
export default Task