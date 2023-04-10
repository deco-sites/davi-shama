import { useState } from "preact/hooks";
import { motion } from "framer-motion";

export default function Example() {
  const [selected, setSelected] = useState(false);
  const exampleVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <div>
      <motion.div variants={exampleVariant} />
    </div>
  );
}
