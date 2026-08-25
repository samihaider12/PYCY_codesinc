import { useQuery } from '@tanstack/react-query';
import logo from '../assets/logo.png';
import codesincLogo from '../assets/codesincLogo.png';
import homeBackground from '../assets/homebg.png';
import missionPark from '../assets/mission1.png';
import missionClassroom from '../assets/mission2.png';
import missionAvatar from '../assets/mission3.png';
import capri from '../assets/capri.png';
import impactMain from '../assets/impact1.png';
import impactTopRight from '../assets/impact2.png';
import impactBottomRight from '../assets/impact3.png';
import programHighSchool from '../assets/program1.png';
import programFreedomSchool from '../assets/program2.png';
import programCapri from '../assets/program3.png';
import supportStage from '../assets/support1.png';
import supportPainting from '../assets/support2.png';
import supportGroup from '../assets/support3.png';
import testimonialWoman from '../assets/testi1.png';

const imageCatalog = {
  logo,
  codesincLogo,
  homeBackground,
  missionPark,
  missionClassroom,
  missionAvatar,
  capri,
  impactMain,
  impactTopRight,
  impactBottomRight,
  programHighSchool,
  programFreedomSchool,
  programCapri,
  supportStage,
  supportPainting,
  supportGroup,
  testimonialWoman,
  testimonialAvatarOne:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  testimonialAvatarTwo:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
};

const fetchImages = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(imageCatalog), 1500);
  });

export const useImages = () =>
  useQuery({
    queryKey: ['pcyc-images'],
    queryFn: fetchImages,
    staleTime: Infinity,
  });
