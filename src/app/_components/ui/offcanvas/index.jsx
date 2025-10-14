// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { MenuBody } from "./components/body";
import { MenuFooter } from "./components/footer";
import { slideLeft, opacity } from "./variants";

export function Offcanvas({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-opacity-50 z-10"
        variants={opacity}
        initial="initial"
        animate="enter"
        exit="exit"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        className="fixed top-0 right-0 h-full w-full md:max-w-[70%] lg:max-w-[50%] bg-[var(--color-text)] text-white z-50 flex flex-col overflow-hidden"
        variants={slideLeft}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {/* Header */}
        <div className="flex-shrink-0 flex mt-[5rem] p-6 border-b border-gray-700">
          <h2 className="text-sm text-gray-400 uppercase">Navigation</h2>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide"
             style={{
               scrollbarWidth: 'none', /* Firefox */
               msOverflowStyle: 'none', /* Internet Explorer 10+ */
             }}>
          <div className="py-[8vh] px-[7.5vw] pb-[10vh] min-h-full flex flex-col">
            {/* Body */}
            <div className="flex-1">
              <MenuBody onMenuClose={onClose} />
            </div>

            {/* Footer */}
            <div className="mt-auto">
              <MenuFooter />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
