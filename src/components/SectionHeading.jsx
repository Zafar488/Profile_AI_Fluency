import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, text }) {
  return <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .45 }} transition={{ duration: .6 }}>
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
    {text && <p>{text}</p>}
  </motion.div>
}
