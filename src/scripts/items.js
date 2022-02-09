
/*  Components */
import Profile from './../components/social-app/Profile/Profile';
import Dialogs from './../components/social-app/Dialogs/Dialogs';
import News from './../components/social-app/News/News';
/* Icon Components */
import ProfileIcon from './../components/social-app/Navigation/icon-components/ProfileIcon';
import MessageIcon from '../components/social-app/Navigation/icon-components/MessageIcon';
import NewsIcon from '../components/social-app/Navigation/icon-components/NewsIcon';
import MusicIcon from '../components/social-app/Navigation/icon-components/MusicIcon';
import IconSettings from '../components/social-app/Navigation/icon-components/SettingsIcon';
import Music from './../components/social-app/Music/Music';
import Settings from './../components/social-app/Settings/Settings';

const links = [
  {
    text: 'Profile',
    link: `/profile`,
    component: <Profile />,
    icon: <ProfileIcon />
  },
  {
    text: 'Dialogs',
    link: `/dialogs`,
    component: <Dialogs />,
    icon: <MessageIcon />
  },
  {
    text: 'News',
    link: `/news`,
    component: <News />,
    icon: <NewsIcon />
  },
  {
    text: 'Music',
    link: `/music`,
    component: <Music />,
    icon: <MusicIcon />
  },
  {
    text: 'Settings',
    link: `/settings`,
    component: <Settings />,
    icon: <IconSettings />
  }
];

export { links };