import config from "../app/config"
import { USER_ROLE } from "../app/modules/user/user.constant"
import { User } from "../app/modules/user/user.model"

const superUser = {
    id: '0001',
    email: 'tayebhossain88@gmail.com',
    password: config.super_admin_password,
    needsPasswordChange: false,
    role: USER_ROLE.superAdmin,
    status: 'in-progress',
    isDeleted: false,
}

const seedSuperAdmin = async () => {
    // when database connection is established, we will check if there any user who is super admin\
    const isSuperAdminExists = await User.findOne({ role: USER_ROLE.superAdmin });

    if (!isSuperAdminExists) {
        await User.create(superUser);
    }
}

export default seedSuperAdmin;