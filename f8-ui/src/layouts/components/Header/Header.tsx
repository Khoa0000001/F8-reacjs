import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '../Search';
import Config from '~/config';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { NotificationIcon } from '~/components/Icons';
import MyLearn from '../MyLearn';
import UserMenu from '../UserMenu';
import { useEffect, useState } from 'react';
import * as userService from '~/services/userService';
import * as check from '~/untils/check';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cx = classNames.bind(styles);

function Header() {
    const [infoUser, setInfoUser] = useState();

    async function fetchInfoUser() {
        const infoUser = await userService.infoUser();
        if (infoUser.status === 200) setInfoUser(infoUser.data);
    }

    useEffect(() => {
        if (check.checkLogin()) {
            fetchInfoUser();
        }
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={Config.routes.home}>
                        <img className={cx('logo-link')} src={images.logo} alt="F8" />
                    </Link>
                    <h4 className={cx('logoHeading')}>Học Lập Trình Để Đi Làm</h4>
                </div>
                <div className={cx('search')}>
                    <Search />
                </div>
                <div className={cx('actions')}>
                    {infoUser ? (
                        <>
                            <MyLearn />
                            <div className={cx('notification')}>
                                <NotificationIcon width="20" height="20" className="" />
                            </div>
                            <UserMenu infoUser={infoUser} />
                        </>
                    ) : (
                        <>
                            <Link to={Config.routes.login}>
                                <button className={cx('NavBar_loginBtn')}>Đăng nhập</button>
                            </Link>
                            <Link to={Config.routes.register}>
                                <button className={cx('NavBar_registerBtn')}>Đăng ký</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
