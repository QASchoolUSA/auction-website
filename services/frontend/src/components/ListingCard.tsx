import Link from 'next/link';
import React from 'react';

import { centsToDollars } from '../utils/cents-to-dollars';
import Countdown from './Countdown';

interface IProps {
  name: string;
  expiresAt: string;
  price: number;
  slug: string;
  smallImage: string;
}

const ListingCard = ({ name, price, slug, smallImage, expiresAt }: IProps) => {
  return (
    <div className="w-full lg:w-1/5 sm:w-1/3 px-2 mb-4">
      <Link href={slug} legacyBehavior>
        <div className="rounded shadow cursor-pointer">
          <img className="w-full" src={smallImage} alt={name} />
          <div className="p-3">
            <a className="text-indigo-600 hover:underline">
              <h3 className="text-lg font-semibold truncate mb-1">{name}</h3>
              <Countdown expiresAt={expiresAt} />
            </a>
            <p className="text-xl font-bold">{centsToDollars(price)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
