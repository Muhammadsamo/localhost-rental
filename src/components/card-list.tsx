import { FunctionComponent, useCallback } from 'react';
import {useNavigate} from "react-router-dom";
import ListingItem from "./listing-item";



const CardList:FunctionComponent = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <section className="w-full flex flex-row flex-wrap items-start justify-center gap-[20px_18.7px] max-w-[1280px] min-h-[1692px] text-left text-xs text-accent font-archivo mq1275:max-w-full">{.map((item, index) => <ListingItem key={index} listingImage={item.listingImage} listingTitle={item.listingTitle} listingSubtitle={item.listingSubtitle} rating={item.rating} price={item.price} showBestTime={item.showBestTime} onListingItemContainerClick={onListingItemContainerClick} />)}
    </section>);
};

export default CardList;
