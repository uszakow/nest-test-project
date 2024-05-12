import { Injectable } from '@nestjs/common'
import mime from 'mime'

@Injectable()
export class AppService {
	getHello(): string {
		const mimeType = mime.getType('txt')
		console.log('mimeType', mimeType)

		return 'Hello World!'
	}
}
