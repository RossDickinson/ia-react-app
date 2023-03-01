import PropTypes from 'prop-types';
import { city } from '../assets';
import { 
  Map,
} from '../pages/geomap/Index';

const FeedbackCard = ({ content }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={ city } alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      { content }
    </p>
    <div className="w-full h-screen">
      <Map />
    </div>
  </div>
);

FeedbackCard.propTypes = {
  content: PropTypes.string };

export default FeedbackCard;
