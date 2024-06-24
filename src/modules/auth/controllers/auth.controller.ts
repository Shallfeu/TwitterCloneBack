import {Controller, Post} from "@nestjs/common";
import {AuthService} from "../services/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('signup')
    signup() {
        return 1;
    }

    @Post('signin')
    signin() {
        return 2;
    }
}