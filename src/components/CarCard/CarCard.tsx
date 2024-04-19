import React, { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface CarCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const CarCard: React.FC<CarCardProps> = ({ title, imageUrl, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
      <>
        {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-white-900"></div>
            </div>
        ) : (
            <div className={`max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition duration-300 ease-in-out hover:scale-105`}>
              <div className="overflow-hidden">
                <img
                    className="w-full h-48 object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
                    src={imageUrl}
                    alt={title}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl text-gray-700 font-semibold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
                <div className="mt-4">
                  <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
        )}

        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
          <Dialog onClose={closeModal} className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              <div className="bg-white rounded-lg p-8 max-w-md w-full mx-auto z-50">
                <Dialog.Title className="text-lg text-gray-700 font-semibold mb-4">{title}</Dialog.Title>
                <img
                    className="w-full h-48 object-cover"
                    src={imageUrl}
                    alt={title}
                />
                <p className="text-gray-700">{description}</p>
                <button onClick={closeModal} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Закрыть
                </button>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
  );
};

export default CarCard;
