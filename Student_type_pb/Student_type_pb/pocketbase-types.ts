/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	StudentManagemant = "student_managemant",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type StudentManagemantRecord = {
	fullname?: string
	gender?: string
	age?: number
	faculty?: string
	department?: string
	email?: string
	mobile?: number
	checkbox?: boolean
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type StudentManagemantResponse = Required<StudentManagemantRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	student_managemant: StudentManagemantRecord
	users: UsersRecord
}

export type CollectionResponses = {
	student_managemant: StudentManagemantResponse
	users: UsersResponse
}